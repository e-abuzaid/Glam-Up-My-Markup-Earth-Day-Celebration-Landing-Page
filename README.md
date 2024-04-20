_This is a submission for [Frontend Challenge v24.04.17](https://dev.to/devteam/join-us-for-the-next-frontend-challenge-earth-day-edition-52e4), Glam Up My Markup: Earth Day Celebration Landing Page_

## What I Built

I'm not exactly a UI/UX designer. However, my goal was to create a fun and somewhat interactive layout, without sacrificing accessibility, usability, readability, responsiveness or code quality.

## Demo

![Screenshot of the website](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i63qtgfyfsxhbv8jww86.png)

try it here
{% embed https://e-abuzaid.github.io/Glam-Up-My-Markup-Earth-Day-Celebration-Landing-Page/ %}

[Source code](https://github.com/e-abuzaid/Glam-Up-My-Markup-Earth-Day-Celebration-Landing-Page/tree/master)

## Journey

When I first viewed the challenge and what it's about, this image of a big globe that rotates on swipe in the middle of page sprung in my head. but I wasn't quite sure how to implement it in plain JavaScript (I'm spoiled by React, and I didn't want to use any external JS libraries in order to really challenge myself). So I searched online for solutions and consluted ChatGPT, I mixed and matched until I came up with this solution.

So bascially, that globe is a simple rounded div with a background image that's a regular rectangular map of the world. And depending on its rotating position, the background image position changes, and along with it, the globe scales up and then down. With those two simple animations put together, it gives the impression of a globe rotating in 3d along the Z-axis.

I initially had it rotate by the pressing the left/right keys on keyboard. but I quickly realized that it would be an accessibility nightmare for keyboard users. And I added the left and right arrows to signal that the user can interact with it, and also for usability on mobile.

I also considered making the background black with glowing stars, but I figured it would give the feel of the website being about space/astronomy rather than the earth itself, so I decided to make it this greenish color.

I'm particularly happy that I figured out how to do it relatively quickly, and that it got these scores when analyzing it with lighthouse.

![The website lighthouse scores](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zu6ng2vg6r2dvyd31b1l.png)

And overall, I had fun doing the challenge and looking forward to the upcoming ones!
