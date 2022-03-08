//==============================================================================
// ■ Reddit (reddit/index.js)
//------------------------------------------------------------------------------
//     Reddit API access service. Based on snoowrap library.
//==============================================================================
const $markAsOC = require("./reddit/mark-as-oc");
const $applyFlairs = require("./reddit/apply-flairs");
const $getNewByMe = require("./reddit/get-new-by-me");
const $submitLink = require("./reddit/submit-link");

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = function reddit(requester, subredditName) {
  return {
    markAsOC(submission) {
      $markAsOC(requester, subredditName, submission.name);
    },
    applyFlairs(submission, flairsTexts) {
      $applyFlairs(submission, flairsTexts);
    },
    getNewByMe(options) {
      $getNewByMe(requester, subredditName, options);
    },
    submitLink(post) {
      $submitLink(requester, subredditName, post);
    }
  };
};
