---
title: "6 Principles of Visual Design"
date: 2019-04-25
collection: blog
author: sarah
image: houses.jpg
img-credit: https://unsplash.com/photos/qY_yTu7YBT4
permalink: blog/6-rules-of-visual-design
nav: blog
---

Today, I'm going to share with you six principles I've learned in my career as a designer.

I had originally called this blog post, "The 6 Rules of Visual Design" but then I realized...

<figure class="halfwidth">
  <img src="{{site.baseurl}}/assets/img/blogimages/guidelines.gif" alt="Windustries fake company site without much whitespace">
  <figcaption>The most quotable non-Captain Sparrow line from <a href="https://www.imdb.com/title/tt0325980/" target="____blank">Pirates</a>.</figcaption>
</figure>

This post intended for people who are new to design. My original goal was to offer guidance to new developers who want to add some finesse to their projects or website, but I hope anyone who is new to design will benefit from the guidelines in this article.

I've noticed that a lot of new coders are often intimidated by CSS—or rather, by the prospect of making design decisions while also trying to learn CSS. While developers in the real world are given specs and prototypes to work from, having at least some guidelines for producing good visual design will come in handy, especially as new devs build their own websites and portfolio to catch the eye of a hiring manager.

Also, I use the term "website" throughout this article, but these principles also apply for the most part to web apps, mobile apps, desktop apps, print design, ad design, etc.

Let's dive in!

### 1. Whitespace is Your Friend

<a href="http://erikdkennedy.com/" target="____blank">Erik Kennedy's</a> advice to "double your whitespace" is spot on. In this era of clean, minimalist design and spacious layouts, you are much more likely to have too little whitespace than too much. This applies to both font spacing and overall layout.

#### Font
The space between lines of type is called `line-height` in code and "leading" (pronounced *ledding*) in design. The default is often 1.2 times the height of the type, so 20pt font has a 24px line height. However, I find this spacing is often not enough. My go-to is 1.5 to 2 times the font size. For context, the type you're reading is a 20px font with a 40px line height.

Another note on spacing and text: put a `max-width` on your paragraphs. It's not easy for the user to read paragraphs that span the full width of a webpage, and it makes for some wonky paragraphs. The general rule of thumb is to 12 or so words per line.

#### Layout
You've probably been told to keep info on your webpage "above the fold"—meaning put the most important stuff in the top portion where the user doesn't have to scroll to find it. This means put engaging, interesting, intriguing content as the first thing your user will see when they come to your site. It *doesn't* mean cram everything you can in this top section.

To see the importance of whitespace in layout, look at the website for this (fictitious) company that sells wind turbines. The site is a pretty standard  layout, but it feels especially cramped and the elements are in desperate need of breathing room.
<figure class="fullwidth">
  <img src="{{site.baseurl}}/assets/img/blogimages/windustries-before.png" alt="Windustries fake company site without much whitespace">
  <figcaption>Minimal whitespace. I mocked up this website quickly for the sake of the example—I'm sure other design improvements could be made and if you spot them—good! You're getting an eye for design. :) Also, the 1908 date is just a wee bit of humor. </figcaption>
</figure>

I added white space in the header, in between the nav links, around the text over the image, in the three-column layout, and in the following section. With just those changes, the page is looking much better.

<figure class="fullwidth">
  <img src="{{site.baseurl}}/assets/img/blogimages/windustries-after.png" alt="Windustries fake company site with whitespace">
  <figcaption>Ahhh, so much better.</figcaption>
</figure>

### 2. Pick a Solid Font

My favorite source for a new font for a project is Google Fonts—especially for website projects. They have a really nice range, all free and all ready to be plugged into your project.

But there are *so* many options—how do you narrow it down and find a solid font for your site? Here's what you should consider.

#### Font Faces
When we talk about fonts, what we really mean is the font *family* (also known as typefaces in print design). The font family is made of up font faces, such as bold and italic. For example, this paragraph's font family is Lato (one of my favorite fonts) and the typeface is Lato Light.

A lot of the options in Google Fonts have up to 16 font faces, but some have only one (usually script or display fonts). Make sure to pick a font family that has all the variations you need.

Conversely, you probably only need four to six font faces on your site (for example: light, light italic, regular, regular italic, bold, bold italic). Since loading more font faces means longer load times, only include what you need.

#### Legibility
The next thing to consider as you pick a font is to see what it looks like at large and small sizes. Some fonts work great for headlines at 48px but aren't very easy to ready at 14 or 16px. Pairing fonts—one for headlines, one for everything else—is common practice but it may be easier to pick a font that works well at a variety of sizes if you're just starting out.

#### License
The obvious reason why I love Google Fonts is because their fonts are open source. If you decide to use a font that's not in the Google Fonts catalog, please make sure that you are using an open source font, or that you have the proper license for the typeface.  

#### Style & Convention
Typefaces come in two different distinct styles: serif and sans serif. Serif fonts have little "feet," whereas sans serif (literally "without serif") do not. Typefaces are broken down into even more distinct categories: serif, sans serif, monospace, script, and display. Typography is even more nuanced than this but that gets outside of the scope of this article.

As you pick a font, consider where and how else it is used. For example, news and fashion sites tend to use serif fonts. Tech startups often use sans serif fonts. Monospace is used in code and text editors. Script and display fonts bring personality, but make sure that they fit with the overall brand and style of your website.

### 3. Be a (Color) Minimalist

It's really easy to overdue color in a design, or to mix saturated and desaturated tones.

The best approach is to start with black and white. Personally, I don't like using pure black because it looks too stark (read <a href="https://ianstormtaylor.com/design-tip-never-use-black/" target="____blank">this article</a> if you need convincing). I prefer a very dark gray, like `#262626`.  
<figure class="fullwidth">
  <img src="{{site.baseurl}}/assets/img/blogimages/black.png" alt="Pure black vs. very dark gray">
</figure>

If you need to differentiate sections, use a very light gray—I used `#f8f8f8` as the background color for this blog. Then add color from there. Most brands have a primary color and a secondary color. Color communicates a lot in design, so I recommend the curious read up on <a href="https://graf1x.com/color-psychology-emotion-meaning-poster/" target=____blank">color theory</a>.

<a href="https://color.adobe.com/create" target="____blank">Adobe Color</a> is a fantastic resource for finding good color palettes. You can search for palettes that include the color you want to use, upload an image that has the color(s) you want to use, or create a palette from scratch.

<figure class="fullwidth">
  <img src="{{site.baseurl}}/assets/img/blogimages/adobe-color-blue.png" alt="Adobe Colors, search for 'blue'">
  <figcaption>Adobe Colors, search for "blue".</figcaption>
</figure>

### 4. Nix Lines and Borders

Using borders around (what feels like) almost every element is more common in web apps than in websites, but it's still something to be aware of. Below is an example of a forum—you can see how using lines is an easy way to create distinction between the different sections of the app, but quickly creates a cluttered interface.

<figure class="fullwidth">
  <img src="{{site.baseurl}}/assets/img/blogimages/forum-before.png" alt="Interface with borders">
  <figcaption>Exaggerated for this example, but <em>barely</em>.</figcaption>
</figure>

Adding a colored background (or very light gray, as mentioned above), grouping, and shadows is a great way to differentiate between sections, and look, Ma! No borders!

<figure class="fullwidth">
  <img src="{{site.baseurl}}/assets/img/blogimages/forum-after.png" alt="Interface with no borders">
</figure>

### 5. Use High-Quality Images

Do you know where to find high-quality photos for your site? If you said a Google image search, you're unfortunately *very* wrong. Don't ever (ever!) use a random photo you find on Google—for anything. It's most likely copyrighted and you can get into some hot water if you slap it on your site without permission.

Thanks to pretty solid cameras in every smartphone, you could take photos yourself. But good photos require more than just equipment (and I would argue that smartphone cameras can't yet compete with a DSLR and good lighting).

A much better option than committing copyright infringement or using your smartphone is to leverage sites like Unsplash, Pexels, or Pixabay. There are others but these are my favorite, both for quality and variety. You have the option to "tip" the photographer if you'd like, but you should consider (if you can) giving a link or credit back to the original post where you got the photo. Sometimes that's not practical (like in print design or on your marketing website). But, for example, I use images from Unsplash on this blog, and have included in the design an image credit link back to the photographer for the header images I've used. When in doubt in arts and code, it's always nice to give credit back to the creator. Just make sure you have permission to use that asset first.

### 6. Leverage Icons


### Resources

Below are the


Fonts: Google Fonts
Color: Adobe color
Photos / Video: Pexels, Unsplash, Pixabay
