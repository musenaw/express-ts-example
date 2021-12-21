import { SchemaError2, errorDetail } from "../schemas/SchemaError";
import Joi from "joi";

/* interface errorDetail{
  message: string,
  type: string,
  context: Joi.Context | undefined,
}
 */
function main() {
  try {
    console.log(SchemaError2);
    const usernameSchema = Joi.string().alphanum().min(3).max(30).required();
    const { value, error } = usernameSchema.validate("my");
    if (error) {
      const errorValues: errorDetail[] = [];
      error.details.map((e) =>
        errorValues.push({
          message: e.message,
          type: e.type,
          context: e.context,
        })
      );
      throw new SchemaError2(errorValues);
    }
    console.log(value);
  } catch (e) {
    console.log(e);
  }
}

main();
