import Joi from "joi";

export interface errorDetail {
  message: string;
  type: string;
  context: Joi.Context | undefined;
}

export type StringValidator = () => boolean;

export type myobject = {
  aa: boolean;
};

const returnPerson: StringValidator = () => {
  return true;
};

function test(): myobject {
  return {
    aa: true,
  };
}

export class SchemaError2 extends Error {
  errors: errorDetail[];
  constructor(errors: errorDetail[]) {
    super();
    this.name = this.constructor.name;

    this.message = `Schema Error`;
    this.errors = errors;
  }
}
