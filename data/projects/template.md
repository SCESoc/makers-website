---
# (required) Title of the project
title: "Project Title"
# (required) Start date of the project (YYYY-MM-DD), can be an approximate date
startDate: "2021-07-08"
# (optional) End date if the project is not ongoing (YYYY-MM-DD), can be an approximate date
endDate: "2021-07-08"
# (optional) banner image for the project, url to an image or file name of imahge uploaded to /static/images/projects/
bannerImage: "https://images.unsplash.com/photo-1525972292986-69295aebf4cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
# (required) description of the project
description: "Learn the best way to optimize your fonts with NextJS and TailwindCSS!!"
# (required) list of makers/collaborators of the project, needs at least one maker
makers: [
	{
		# (required) name of the maker
		name: "Juan Pablo",
		# (optional) role of the maker in the project
		role: "Developer",
		# (optional) avatar image of the maker, url to an image or file name of imahge uploaded to /static/images/projects/
		avatar: "example-avatar.png",
		# (optional) link to contact - email or website link
		contactLink: "https://www.linkedin.com/in/juan-pablo-gonzalez-b9a8b917b/",
	},
  {
		# (required) name of the maker
		name: "Joe Pablo",
		# (optional) role of the maker in the project
		role: "Developer",
		# (optional) avatar image of the maker, url to an image or file name of imahge uploaded to /static/images/projects/
		avatar: "example-avatar.png",
		# (optional) link to contact - email or website link
		contactLink: "https://www.linkedin.com/in/juan-pablo-gonzalez-b9a8b917b/",
	}
]
# (optional) link to the project
url: "https://juanpablobg.com/projects/variable-web-fonts-nextjs-tailwindcss"
# (optional) contact email
contactEmail: "jondoe@test.com"
# (optional) true if looking to collaborate with more makers, false if not. Default: false
lookingForCollaborators: true
# (optional) true if the project is ongoing, false if it is finished. Default: true
active: true
---

Fonts play an essential role in giving character to a website. But if you don't set them up correctly, they could hurt your website's performance and user experience. "Your font choice is critical for branding, readability and performance" - [Lee Robinson](https://leerob.io/). In this blog, I show you the best way to set up custom web fonts on your [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/) application. The core concepts still apply for applications that don't use this tech stack. This particular blog was inspired by [Lee Robinson's blog](https://leerob.io/blog) on [Web Fonts in 2021](https://leerob.io/blog/fonts).

## Why custom web fonts can be a nightmare

When using custom web fonts, you need to make sure you're loading the fonts effectively. Not doing so can lead to issues like [Cumulative Layout Shift (CLS)](https://web.dev/cls/) due to [Flash of Unstyled/Invisible/Faux Text](https://css-tricks.com/fout-foit-foft/). CLS is a shift in layout after the page is loaded that causes poor UX (ever have the text completely jump on you due to ads loading on an article? This jump can happen with font swaps as well).

I ran into CLS issues when trying to load fonts through [Google Fonts](https://fonts.google.com/). The page would load with a default font before quickly changing into the custom font once loaded. This swap in font would cause a slight jump in the layout because of the slightly different aspect ratios of the two fonts. It also didn't help that Google Fonts [no longer supports cross-browser font caching](https://developers.google.com/web/updates/2020/10/http-cache-partitioning).

## System and Web fonts

The easiest and most efficient way to use Web fonts is not to use them. Browsers include [web-safe fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts) by default. You can also use the [system font stack](https://systemfontstack.com/), fonts pre-installed on Apple, Microsoft and Google devices. In both these cases, you skip the need to download fonts to your client. These are good strategies, but that doesn't mean there isn't a way to use custom web fonts effectively.

## Ideal solution for Web Fonts using Next.js and TailwindCSS

Here is a small list of optimizations that can lead to clean use of Web Fonts in 2021 based on [this blog](https://leerob.io/blog/fonts#conclusion):

- Use a variable font
- Preload your font file
- Self-host instead of Google Fonts
- Use `font-display: optional` to prevent layout shift
- Subset your imports

Now I will show you how I set up custom web fonts effectively on my website.

### Step 1: Use Variable Fonts in WOFF2 Format

[Variable Fonts](https://web.dev/variable-fonts/) are a great option if you are looking to load many different font weights and styles. They are a font type that allows you to have multiple font weights and styles imported through just one file. To learn more about variable fonts, check out [this documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide).

The WOFF2 format has become the standard these days for font formats for the web. It is a web font format that is a lot smaller than others.

To use variable fonts, look for a variable font file for the font you're looking to use. The WOFF2 format is prefered. Most of the time, it is difficult to find a `.woff2` format for variable fonts. Although, it is easiest to find a `.ttf` format. Using online converters like Convertio and ConverCloud to convert the TTF to WOFF2 seem to break the axis needed to interpolate between font variation settings. But luckily, there is a way to convert them without breaking anything. Here is [an article](https://henry.codes/writing/how-to-convert-variable-ttf-font-files-to-woff2/) that explains how to use [this repository](https://github.com/google/woff2) to compress TTF into WOFF2.

Next, add the font file(s) to your `/public/fonts` directory and import it as so.

```css
@font-face {
  font-family: "iA Writer Quattro V";
  font-style: normal;
  font-weight: 100 900; // range of weight
  font-display: optional;
  src: url(/fonts/iAWriterQuattroV-Italic.woff2) format("woff2");
}
```

Here is an example of a variable font [iA Writer Quattro V](https://github.com/iaolo/iA-Fonts/tree/master/iA%20Writer%20Quattro/Variable).

### Step 2: Self Host Your Font

Google fonts recommend hosting your fonts for optimal performance as there are no real benefits to using the fonts hosted by them. If you're using [Next.js](https://nextjs.org/), it's super easy to host your fonts. Just throw them in the `/public/fonts` directory of your application. You can also use HTTP headers to cache the font for faster loads. Add this configuration to your HTTP header.

```css
cache-control: public, immutable, max-age=31536000;
```

This optimization ensures that your hosted font is cached for the public and kept immutable (not going to change) for 1 year.

Here is an example you could use if you're using Vercel. Add this to your [/vercel.json](https://vercel.com/docs/configuration#project/headers).

```json
{
  "headers": [
    {
      "source": "/fonts/iAWriterQuattroV-Regular.woff2", // use "/fonts/(.*)" to cache your entire fonts directory
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Step 3: Preload Font Resources

Preloading is a way to load critical resources early in the page load lifecycle. Preloading for fonts is a must to avoid [Cumulative Layout Shift](https://web.dev/cls/) and decrease [First Contentful Paint](https://web.dev/first-contentful-paint/). Here is how you do it.

Add this to your '< Head >' tag. For Next.js, having a custom [\_document.tsx file](https://nextjs.org/docs/advanced-features/custom-document) if you don't have one already, might be helpful. Add multiple preloads for multiple files.

```json
<Head>
  <link
    rel="preload"
    href="/fonts/iAWriterQuattroV-Regular.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/iAWriterQuattroV-Italics.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</Head>
```

### Step 4: Font Display Optimization

[font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) is a parameter in the [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) CSS property which chooses the strategy to render loaded web fonts with values such as `auto`, `swap`, `block`, `fallback` and `optional`. To prevent layout shift due to FOUT or FOIT, using the `optional` value seems to be the best choice. `optional` basically doesn't allow a swap in fonts once the page is loaded. This way, you avoid the chance of a layout shift due to font swaps, but there is a potential of the custom web font not showing up on a load if the font loading isn't optimized or the network is slow.

Below is an example of inserting a font file through a global CSS file. Add multiple font faces for multiple file imports.

```css
@font-face {
  font-family: "iA Writer Quattro V";
  font-style: normal;
  font-weight: normal;
  font-display: optional;
  src: url(/fonts/iAWriterQuattroV-Regular.woff2) format("woff2");
}

@font-face {
  font-family: "iA Writer Quattro V";
  font-style: italic;
  font-weight: normal;
  font-display: optional;
  src: url(/fonts/iAWriterQuattroV-Italic.woff2) format("woff2");
}
```

If you wanted to use `font-display: swap`, look into [font metrics override descriptors](https://docs.google.com/document/d/1PW-5ML5hOZw7GczOargelPo6_8Zkuk2DXtgfOtJ59Eo/edit).

```css
@font-face {
  font-family: ...;
  src: ...;
  ascent-override: 80%;
  descent-override: 20%;
  line-gap-override: 0%;
  ...;
}
```

### Step 5: Subset Your Import

Some fonts can have multiple languages and glyphs, which can cause big file sizes. To reduce the burden, you can filter out only the required Unicode by doing so.

```css
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900; // Range of weights supported
  font-display: optional;
  src: url(/fonts/inter-var-latin.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
```

### Step 6: Extend TailwindCSS FontFamily

Finally, to be able to use the font-family with [TailwindCSS](https://tailwindcss.com/), add this to your `/tailwind.config.json`

```css
module.exports = {
  ...
  theme: {
    extend: {
      ...
      fontFamily: {
        sans: ['iA Writer Quattro V', ...fontFamily.sans]
      },
      ...
    },
  },
  ...
}
```

## Conclusion

Here is the ultimate recipe to use custom web fonts with [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/)

1. Use variable fonts in WOFF2 format
2. Self host your font instead and cache them
3. Preload your font resources
4. Use `font-display: optional` to prevent layout shift
5. Subset your font import
6. Extend your Tailwind FontFamily

I recommend checking out [Lee Robinson](https://leerob.io/) for more content related to Next.js, UI/UX and best practices for web applications. He is currently the Head of Developer Relations at [Vercel](https://vercel.com/), a position I would love to hold someday. He's been a great inspiration in getting this website and blog up and running.

> Don't think of your website as a self-promotion machine, think of it as a self-invention machine.  
> [\- Austin Kleon](https://austinkleon.com/)

Ever heard of the phrase, 'a butterfly flapping in New Mexico can lead to a hurricane in China'? This is referred to as 'The Butterfly Effect'. Though this [may not be scientifically true](https://www.treehugger.com/can-butterfly-flapping-its-wings-really-cause-hurricane-4863374), it is still a very beautiful metaphor. When Bob the butterfly flaps his wings in New Mexico, he sets can potentially set off a chain of constantly growing winds that can, with some luck, lead to a hurricane in China. It goes to show that something so small can have a massive influence on the world. Causing a hurricane isn't making Bob want to or not want to flap his wings. He ultimately has a goal of getting somewhere, and one of his flaps in the process leads to a tornado. Who would have thought?

We're all Bob. Every day we do things that influence other people in their journeys, intentional or not. And we in turn also do things because we are influenced by others. Let's take an example in your own life. Think of your latest and greatest success and trackback in time thinking about why you did the things you did and what got you there. It's possible that one or more interactions with someone or something sparked the journey. And the best part, the person that inspired you, may not have had your success as their ultimate goal, but rather, was just flapping their wings.

## Some Cool Examples

The butterfly effect applies almost everywhere, in business, the stock market, history, life. This is a verse by Benjamin Franklin that was written around the 13th century even before the butterfly effect was identified. It offers a good poetic explanation of the effect.

>For want of a nail, the shoe was lost,  
For want of a shoe the horse was lost,  
For want of a horse the rider was lost,  
For want of a rider the battle was lost,  
For want of a battle the kingdom was lost,  
And all for the want of a horseshoe nail.  

[The Butterfly Effect (2004)](https://www.imdb.com/title/tt0289879/) is a movie featuring Ashton Kutcher, Amy Smart and others that I've been meaning to watch. There are also some great real-world examples of the butterfly examples out there. Here are a few interesting ones that I found.

![Test Image!](https://images.unsplash.com/photo-1645217923596-f4d31dd0f548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80 "HEHE")


- [The Space Shuttle and the Horse's Ass](https://twitter.com/BillHolohanSolr/status/1177631604186996737) - how a horse's ass determined the width of railway tracks and ultimately a major space shuttle design feature. The reason the early spaceships had two smaller booster rockets on the side was to make it possible to transport by railway through a tunnel towards one of the very few launch pads at that time. And the standard railroad gauge of 4 feet, 8.5 inches is derived from the original specifications for an Imperial Roman war chariot from about 2000 years back which is about the distance between two horse's assholes standing side-by-side.
- [Cryptocurrency](https://en.wikipedia.org/wiki/Bitcoin) - How the white paper by Satoshi Nakamoto, the creator of Bitcoin, is revolutionizing the world of finance and giving birth to so my new technologies like web 3.0
- [The Academy of Fine Arts in Vienna rejecting Adolf Hitler’s application, twice](https://www.history.com/news/adolf-hitler-artist-paintings-vienna) - how a young Hitler applied for art school and was rejected, possibly by a Jewish professor. This led him to change the course of his life and ultimately history.
- [Pencil of promise](https://pencilsofpromise.org/founding-story/) - Adam Braun asked a boy begging on the streets of India, "If there is one thing you wanted in the world, what would it be?". The boy replied, "A Pencil". This led Adam to start a movement "Pencil of Promise". With an initial investment of $25, they ended up raising $50,000,000, setting up 430 schools and providing quality education to over 75,000 children.

[Explore more examples ->](https://www.quora.com/What-are-the-greatest-examples-of-the-butterfly-effect-chaos-theory-in-history)

>It used to be thought that the events that changed the world were things like big bombs, maniac politicians, huge earthquakes, or vast population movements, but it has now been realized that this is a very old-fashioned view held by people totally out of touch with modern thought. The things that change the world, according to Chaos theory, are the tiny things. A butterfly flaps its wings in the Amazonian jungle, and subsequently a storm ravages half of Europe.  
— from Good Omens, by Terry Pratchett and Neil Gaiman

## Takeaways:

Although the butterfly effect is less of a fact and more of a metaphor, it is a very powerful one. Here are a few things we can take away from it:

- **The world and life can largely be unpredictable.** The systems around us are chaotic and entropic, prone to sudden change and constant influence.
- **Keep putting yourself out there,** the more you do, the greater the probability of luck and the potential of you finding something desirable.
- **Keep in mind that you influence people every day** and try to be mindful of the kind of influence you put out there
- **Don't make it your ultimate goal to create a hurricane** (focus on the end result), rather focus on flapping your wings every day (consistency)
- **No matter how small your audience is, you can still create a hurricane.** Put your work out into the world and share your journey.

## Resources and More Reading

- [Can a Butterfly Flapping Its Wings Really Cause a Hurricane? - Bryan Nelson](https://www.treehugger.com/can-butterfly-flapping-its-wings-really-cause-hurricane-4863374)
- [The Butterfly Effect: Everything You Need to Know About This Powerful Mental Model - Farnam Street Blog](https://fs.blog/2017/08/the-butterfly-effect/)
- [What are the greatest examples of the butterfly effect / chaos theory in history? - Quora](https://www.quora.com/What-are-the-greatest-examples-of-the-butterfly-effect-chaos-theory-in-history)
- [What is Chaos Theory? - Fractal Foundation](https://fractalfoundation.org/resources/what-is-chaos-theory/)