import { nextTick } from "vue";
import { useValueInput } from "./valueInput";
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
    const model = useValueInput(
      widthOptions,
      { selectValue: "auto" },
      { nonValueOptions: ["auto"], optionValueIfnonValue: "rem" }
    );

    expect(model.selectValue.value).toBe("auto");
    expect(model.selectDisplay.value).toBe("-");
    expect(model.inputPlaceholder.value).toBe("auto");
    expect(model.inputValue.value).toBeNull();
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
    const model = useValueInput(
      widthOptions,
      { selectValue: "auto" },
      { nonValueOptions: ["auto"], optionValueIfnonValue: "rem" }
    );

    expect(model.selectValue.value).toBe("auto");
    expect(model.inputValue.value).toBeNull();

    model.inputValue.value = "100";

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
    const model = useValueInput(
      widthOptions,
      { selectValue: "px", inputValue: "100" },
      { nonValueOptions: ["auto"], optionValueIfnonValue: "rem" }
    );

    expect(model.selectValue.value).toBe("px");
    expect(model.inputValue.value).toBe("100");

    model.selectValue.value = "em";

    await nextTick();
    expect(model.inputValue.value).toBe("100");
    expect(model.selectValue.value).toBe("em");
  });
});
