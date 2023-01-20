import {
  Process__IndexMatchFinder_,
  Process__SpecialArray_,
} from "@process/specialArray.procces";

export class SeekersBase {
  name: string;
  process: process;
  features: Pick<SeekersBaseInterface, "SpecialArray">;

  constructor({
    name = "",
    SpecialArray,
    __error,
    __process,
  }: SeekersBaseInterface) {
    this.name = name;
    this.process = (props) => __process(props);
    this.features = { SpecialArray };

    __error();
  }

  find_target(currentTarget: string) {
    const SA = this.features.SpecialArray;

    // if the options empty, the function will stopped
    if (!(currentTarget != undefined) && !(SA.elementsToGive != undefined))
      return;

    if (typeof SA.targets != "string") {
      if (!SA.targets.flat().includes(currentTarget)) return undefined;
    }

    if (typeof SA.targets === "string") {
      if (SA.targets === currentTarget) return;
    }

    const TARGET_INDEX = Process__IndexMatchFinder_(SA.targets, currentTarget);
    const TARGET_RESULT = Process__SpecialArray_(
      SA.elementsToGive,
      TARGET_INDEX
    );

    const processFun = SA.process && ((props: unknown) => SA.process(props));

    return {
      result: TARGET_RESULT,
      process: processFun,
    };
  }
}
