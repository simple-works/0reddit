//------------------------------------------------------------------------------
// ► Apply-Flairs
//------------------------------------------------------------------------------
module.exports = async function applyFlairs(submission, flairsTexts = []) {
  try {
    const allFlairs = await submission.getLinkFlairTemplates();
    if (allFlairs && allFlairs.length) {
      const flairs = allFlairs.filter(function (flair) {
        for (const flairText of flairsTexts) {
          if (
            flairText.trim().toLowerCase() ===
            flair.flair_text.trim().toLowerCase()
          ) {
            return true;
          }
        }
        return false;
      });
      if (flairs && flairs.length) {
        for (const flair of flairs) {
          await submission.selectFlair({
            flair_template_id: flair.flair_template_id,
          });
        }
        return flairs;
      }
    }
  } catch (err) {
    throw new Error(
      `Could not apply flairs [${flairsTexts}] to submission ${submission.name}.`,
      { cause: err }
    );
  }
};
