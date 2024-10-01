import { nextTick } from "vue";
import { useInputWithUnitSelector } from "./inputWithUnitSelector";
import { expect, describe, it } from "vitest";

describe("useCommon", () => {
  it("init unit is auto", () => {
    const widthOptions = [
      "px",
      "%",
      "rem",
      {
        label: "-",
        value: "auto",
      },
    ];
    const model = useInputWithUnitSelector({
      options: widthOptions,
      defaultValues: { select: "auto" },
      configs: { nonValueOptions: ["auto"], optionValueIfnonValue: "rem" },
    });

    expect(model.selectValue.value).toBe("auto");
    expect(model.selectDisplay.value).toBe("-");
    expect(model.inputPlaceholder.value).toBe("auto");
    expect(model.inputValue.value).toBeUndefined();
  });

  it("input empty and auto unit,then input 100,unit should change", async () => {
    const widthOptions = [
      "px",
      "%",
      "rem",
      {
        label: "-",
        value: "auto",
      },
    ];

    const model = useInputWithUnitSelector({
      options: widthOptions,
      defaultValues: { select: "auto" },
      configs: { nonValueOptions: ["auto"], optionValueIfnonValue: "rem" },
    });

    expect(model.selectValue.value).toBe("auto");
    expect(model.inputValue.value).toBeUndefined();

    model.updateInput("100");

    await nextTick();
    expect(model.selectValue.value).toBe("rem");
  });

  it("input has value and vaild unit,then change unit", async () => {
    const widthOptions = [
      "px",
      "%",
      "rem",
      {
        label: "-",
        value: "auto",
      },
    ];

    const model = useInputWithUnitSelector({
      options: widthOptions,
      defaultValues: { select: "px", input: "100" },
      configs: { nonValueOptions: ["auto"], optionValueIfnonValue: "rem" },
    });

    expect(model.selectValue.value).toBe("px");
    expect(model.inputValue.value).toBe("100");

    model.updateSelect("em");

    await nextTick();
    expect(model.inputValue.value).toBe("100");
    expect(model.selectValue.value).toBe("em");
  });
});
