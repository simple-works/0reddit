# 🌐 0reddit

[![NPM version](https://badge.fury.io/js/0reddit.svg)](https://npmjs.org/package/0reddit)

A small extension of [snoowrap](https://github.com/not-an-aardvark/snoowrap) with some simplified reddit API functions.

![Screenshot](./screenshot.gif?raw=true)

# 📥 Install

```
npm i 0reddit
```

# 🏁 Use

```js
const snoowrap = require("snoowrap");
const $reddit = require("0reddit");

const requester = new snoowrap({
  /* OAuth credentials here */
});
const $subreddit = $reddit(requester, "SomeSubreddit");

// Submit a link
const submission = await $subreddit.submitLink({
  title: "Wracurd",
  url: "https://example.com/wracurd.jpg",
  oc: true,
  flairs: ["artwork", "comic", "color"],
});

// Get own newest submission
const myLatestSubmission = await $subreddit.getNewByMe({ one: true });
```

# 📕 API

- `reddit(requester, subredditName)` : Create an object containing the functions.

  - `requester: snoowrap` : Snoowrap [requester](https://not-an-aardvark.github.io/snoowrap/snoowrap.html) object.
  - `subredditName: String` : Subreddit name (without r/ prefix).

- `await submitLink(post)` : Submit a link post.

  - `post: Object` : Object describing a link post.
    - `title: String` : post title.
    - `url: String` : post link.
    - `oc?: Boolean` : If true, mark post as OC.
    - `flairs?: String[]` : Texts of flairs to assign to post.

- `await getNewByMe(options)` : Get own new submissions.

  - `options?: Object`: Options object.
    - `one?: Boolean` : If true, return the first submission object (Instead of Array).
    - `limit?: Number` : Maximum number of submissions to retrieve.

- `await markAsOC(submission)` : Mark a submission as OC.

  - `submission: Submission` : Snowrap [submission](https://not-an-aardvark.github.io/snoowrap/Submission.html).

- `await applyFlairs(submission, flairsTexts)` : assign flairs to a submissions.

  - `submission: Submission` : Snowrap [submission](https://not-an-aardvark.github.io/snoowrap/Submission.html).
  - `flairsTexts: String[]` : Array of flairs texts.

# 📃 License

[MIT](./LICENSE) © [Ambratolm](https://github.com/Ambratolm)
