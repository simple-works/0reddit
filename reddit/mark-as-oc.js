//------------------------------------------------------------------------------
// ► Mark-As-OC
//------------------------------------------------------------------------------
module.exports = async function markAsOC(
  requester,
  subredditName,
  submissionName
) {
  try {
    await requester.oauthRequest({
      uri: "/api/set_original_content",
      method: "post",
      form: {
        id: submissionName.replace("t3_", ""),
        fullname: submissionName,
        should_set_oc: true,
        executed: true,
        r: subredditName,
      },
    });
  } catch (err) {
    throw new Error(
      `Could not mark as OC submission ${submissionName} for r/${subredditName}.`,
      { cause: err }
    );
  }
};
