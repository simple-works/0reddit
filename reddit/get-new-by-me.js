//------------------------------------------------------------------------------
// ► Get-New-By-Me
//------------------------------------------------------------------------------
module.exports = async function getNewByMe(requester, subredditName, options = {}) {
  try {
    const { one, limit = one ? 1 : 5 } = options;
    const subreddit = requester.getSubreddit(subredditName);
    const { name } = await requester.getMe();
    const submissions = await subreddit.search({
      query: `author:${name}`,
      sort: "new",
      limit,
    });
    if (submissions && submissions.length)
      return one ? submissions[0] : submissions;
  } catch (err) {
    throw new Error(
      `Could not search for new submissions by ${name} in r/${subredditName}.`,
      { cause: err }
    );
  }
}
