import { __specialArray__, IterateOnAnArray } from "./specialArray.process";

export class SeekersBase {
  name: string;
  process: unknown;
  SpecialArray: Pick<SeekersBaseInterface, "SpecialArray">;

  constructor({
    name = "",
    SpecialArray = {},
    Props = false,
    __error,
    __process,
  }: SeekersBaseInterface) {
    this.name = name;
    this.process = this.#PROCESS(__process);
    this.SpecialArray = SpecialArray;

    __error();

    if (this.SpecialArray) {
      this.findTarget = (target) => this.#FIND_TARGET(target);
    }
  }

  #FIND_TARGET(currentTarget) {
    const SA = this.SpecialArray;

    // if the options empty, the function will stopped
    if (!(currentTarget != undefined) && !(SA.elementsToGive != undefined))
      return;

    if (!SA.targets.flat().includes(currentTarget)) return undefined;

    const TARGET_INDEX = IterateOnAnArray(SA.targets, currentTarget);
    const TARGET_RESULT = __specialArray__(SA.elementsToGive, TARGET_INDEX);

    const processFun = SA.process && ((props) => SA.process(props));

    return {
      result: TARGET_RESULT,
      process: processFun,
    };
  }

  #PROCESS(customProcess) {
    return customProcess();
  }
}
