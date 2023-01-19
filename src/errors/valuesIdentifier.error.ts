import stringSimilarity from "string-similarity";

export function __values_identifier__({
  valuesToCheck,
  correctValues,
}: {
  valuesToCheck: object;
  correctValues: { name: string; values: string[] };
}) {
  const valuesToCheckKeys = Object.keys(valuesToCheck);

  valuesToCheckKeys.forEach((el) => {
    const OFICIAL_PROP = correctValues.values.some((element) => element === el);

    if (!OFICIAL_PROP) {
      const SS = stringSimilarity.findBestMatch(el, correctValues);

      if (SS.bestMatch.rating > 0.5) {
        throw new Error(
          `"${el}" isn't a registered property. Did you mean "${SS.bestMatch.target}"?`
        );
      } else
        throw new Error(
          `${
            correctValues.name
          } must contain the following properties: ${correctValues.values.join(
            ", "
          )}`
        );
    }
  });
}
