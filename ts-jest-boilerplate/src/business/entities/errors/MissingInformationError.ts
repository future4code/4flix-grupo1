import { CustomError } from "../errors/CustomError";

export class MissingInformationError extends CustomError {
  constructor(message: string = "Information is missing") {
    super(message, 405);
  }
}