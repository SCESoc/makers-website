---
# (required) Title of the project
title: "Rusty Christmas tree"
# (required) Start date of the project (YYYY-MM-DD), can be an approximate date
startDate: "2021-12-20"
# (optional) banner image for the project, url to an image or file name of image uploaded to /static/images/projects/
bannerImage: "https://cdn.discordapp.com/attachments/444005079410802699/955980070953033798/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3434343030353037393431303830323639392f3932333330383236373134333330333230382f756e6b6e6f776e2e706e67.png"
# (required) description of the project
description: "A LED Christmas Tree controlled by Rust. Contribute your own renderers! "
# (required) list of makers/collaborators of the project, needs at least one maker
makers: [
	{
		# (required) name of the maker
		name: "Forest Anderson",
		# (optional) role of the maker in the project
		role: "Developer",
		# (optional) avatar image of the maker, url to an image or file name of image uploaded to /static/images/projects/
		avatar: "https://avatars.githubusercontent.com/u/14791619?v=4",
		# (optional) link to contact - email or website link
		contactLink: "https://github.com/AngelOnFira",
	}
]
# (optional) true if looking to collaborate with more makers, false if not. Default: false
lookingForCollaborators: true
# (optional) true if the project is ongoing, false if it is finished. Default: true
active: true
# (optional) list of social media links
connectLinks: [
  {
    # (required) name of the social media
    name: "Github Repo",
    # (required) url of the social media or email address
    link: "https://github.com/AngelOnFira/rusty-christmas-tree",
  }
]
# (optional) list of technologies used in the project, array of strings or technology objects with (name, url, logo)
technologies: [
  {
    # (required) name of the technology
    name: "Rust",
    # (optional) url to the technology website
    url: "https://www.rust-lang.org/",
  }
]
# (optional) list of tags
tags: [
  "Rust",
  "Raspberry Pi",
]
---

# Rusty Christmas Tree

This is code that draws on the LED Christmas Tree made by
[@aidancrowther](https://github.com/aidancrowther/). You can see his 3D design
files and Pi Pico setup code on his project
[OpenPixelTree](https://github.com/aidancrowther/OpenPixelTree).

## Adding your own renderer

If any of this doesn't make sense, write an issue and I'll try to make it more
clear 👍

This should get you started with making something to display on the tree. There
is a Nannou visualizer included so you can see what it will look like before
making a PR. You'll be able to run this with `make visualize` from the root.

To write your own code to run on the tree, you need to implement a "renderer". A
renderer is just a Rust module that implements a draw function, and returns a
`TreeCanvas`. You can find the renderers in [this
folder](https://github.com/AngelOnFira/rusty-christmas-tree/tree/main/tree-writer/src/renderers).
Here is an example of what you'll implement:

```rust
pub fn draw(tick: u64) -> TreeCanvas {
    let mut canvas = TreeCanvas::new();
    for y in 0..75 {
        for x in 0..20 {
            let this_pixel = Pixel {
                r: (
                    (tick as f64) // Start by converting the tick to a 64 bit float
                    .sin() // The sin will be between -1 and 1
                    .abs() // Get the absolute value so we are between 0 and 1
                    * 150.0 // Multiply by 150 to get a number between 0 and 150
                    + 100.0
                    // ^^ Add 100 to get a number between 100 and 250
                ) as u8, // Convert the float to an 8 bit integer
                g: 0,
                b: 0,
            };
            canvas.set_pixel(x, y, this_pixel)
        }
    }
    canvas
}
```

To add a new renderer, start by duplicating the `template` folder and giving it a new
name. You'll then have to add code in several different places in the project:

- First, add your module
  [here](https://github.com/AngelOnFira/rusty-christmas-tree/blob/main/tree-writer/src/renderers/mod.rs#L5).
- Second, add a new enum variant
  [here](https://github.com/AngelOnFira/rusty-christmas-tree/blob/main/tree-data-schema/src/lib.rs#L7).
- Next, we'll have to add this new variant to several match statements
  [here](https://github.com/AngelOnFira/rusty-christmas-tree/blob/main/tree-data-schema/src/lib.rs#L17),
  [here](https://github.com/AngelOnFira/rusty-christmas-tree/blob/main/tree-writer/src/renderers/mod.rs#L13),
  and
  [here](https://github.com/AngelOnFira/rusty-christmas-tree/blob/main/tree-writer/src/main.rs#L54).
- Finally, set the default vizualizer renderer to your new renderer
  [here](https://github.com/AngelOnFira/rusty-christmas-tree/blob/main/tree-visualizer/src/main.rs#L38).
  
Hopefully I get some time to fix this eventually, but I don't know how right
now. Now, you can start working in the `mod.rs` file in the new renderer folder.

At this point, you should also be able to run the visualizer and see your
renderer in action.

```bash
make visualize
```

Once you have something cool, make a pull request!

<p align="center">
    <img src="images/mario.gif" width="500" />
</p>

### Other Make Commands

```
build: build tree-writer for the Raspberry Pi (requires Docker and cargo-cross)
deploy: scp the binary to the Pi
run: (build + deploy) build tree-writer for the Raspberry Pi and scp the binary to the Pi
visualize: run the Nannou visualizer
setup-web: install the prerequisites for the frontend
frontend: serve the frontend
frontend-release: serve the frontend in release mode
```

## Architecture

The plan for this project is to have many renderers implemented that show off
different displays (tree-writer). There will be a web server running
(tree-backend) that allows you to change what is currently being displayed on
the tree. A simple web frontend (tree-frontend) will display all the options of
renderers and allow you to pick one to display.

On the Raspberry Pi, there will be a process (tree-deploy) that runs the main
process (tree-writer). The first process will look for new releases from Github
periodically. If there is a new release, it will update the and restart the main
process.

While you're developing, you can run the visualizer (tree-visualizer) to see
what your renderer will look like on the tree.

### Physical Tree

The physical tree is running on a Raspberry Pi Pico. There are 20 (actually 19)
strips running, creating 19x75 LED grid. You send data to the LED strings using
`spidev`, and send 4500 8-bit numbers for each frame. Up to 33 frames can be
drawn per second. The light indexes on the tree are as follows:

```
3 4 9
2 5 8
1 6 7
```

### tree-writer

This crate is where the different "renderers" are implemented. A renderer is
just a module that implements a draw function, and returns a `TreeCanvas`. In
this function, you can set any `Pixel{r: u8, g: u8, b: u8}` on the `TreeCanvas`.

### tree-visualizer

This crate uses [Nannou] to visualize different `renderers`. It renders at the
same speed (I think:tm:) and orientation that will be displayed on the tree.

### tree-backend

This crate uses [Warp] to serve a basic web server. It allows you to change the
renderer that is currently being displayed on the tree. The `tree-writer` will
ping this server about once a second to see if there is a new renderer to switch
to.

### tree-frontend

This crate uses [Yew] to create a basic frontend for the `tree-backend`. It will
just have a list of buttons.

### tree-script

This was an attempt to use the Mun scripting language as the backend for drawing
to the canvas. Currently, this isn't working, but if an MVP is made, then it
could be easier to write with, and hot reloadable as well.

[Nannou]: https://github.com/nannou-org/nannou
[Warp]: https://github.com/seanmonstar/warp
[Yew]: https://github.com/yewproject/yew

<p align="center">
    <img src="images/snow.gif" width="500" />
</p>


## License

Licensed under either of

 * Apache License, Version 2.0, [LICENSE-APACHE](http://www.apache.org/licenses/LICENSE-2.0)
 * MIT license [LICENSE-MIT](http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be dual licensed as above, without any additional terms or
conditions.