//------------------------------------------------------------------------------
// ► Submit-Link
//------------------------------------------------------------------------------
const $markAsOC = require("./mark-as-oc");
const $applyFlairs = require("./apply-flairs");
//------------------------------------------------------------------------------
module.exports = async function submitLink(requester, subredditName, post = {}) {
  try {
    const { title, url, oc, flairs = [] } = post;
    const subreddit = requester.getSubreddit(subredditName);
    const submission = await subreddit.submitLink({
      title,
      url,
      resubmit: false,
    });
    if (oc) await $markAsOC(requester, subredditName, submission.name);
    if (flairs.length) await $applyFlairs(submission, flairs);
    return submission;
  } catch (err) {
    throw new Error(`Could not submit link to r/${subredditName}.`, {
      cause: err,
    });
  }
}
