import { ComputedRef, Ref } from "vue";
import { useEventListener } from "@vueuse/core";
import { TSelectedChangeEventArgs, type TSelectorConfig } from "@/shared/types";
import * as utils from "@/shared/utils";
import * as types from "@/shared/types";
import * as targetElementContext from "@/shared/targetElementContext";
import * as recordTracker from "@/shared/recordTracker";
import * as testingContent from "@/shared/testingContent";
import * as elementTree from "@/shared/elementTree";
import { initConfigs } from "@/shared/configs";
import * as AppEmits from "@/shared/emits";
import * as hoverElement from "@/shared/hoverElement";
import * as language from "@/shared/language";
import * as server from "@/shared/server";

export function initTrackBall(options: {
  config: TSelectorConfig;
  languageConfig: language.TLanguageConfig;
  emits: AppEmits.TAppEmits;
  elementTreeData: types.TElementTreeData;
}) {
  initConfigs(options.config);
  initLanguage(options.languageConfig);
  hoverElement.initHoverElement(options.config);

  hookPageMouseEvent(hoverElement.useHoverElement());

  AppEmits.init(options.emits, {
    selectorConfig: options.config,
  });

  elementTree.init(options.elementTreeData);
}

function initLanguage(languageConfig: language.TLanguageConfig) {
  language.setLocale(languageConfig.locale);

  Object.entries(languageConfig.messages).forEach(([locale, messages]) => {
    language.addMessage(locale as language.TLanguageConfig["locale"], messages);
  });
}

function isColorPicker(target: HTMLElement) {
  const picker = target.closest(".q-color-picker");
  if (!picker) {
    return false;
  }
  return true;
}

export function getBoxParentId(target: HTMLElement, config: TSelectorConfig) {
  let box = target.parentElement!.closest(
    `${config.selectors}`
  ) as HTMLElement | null;

  while (box !== null) {
    const display = window
      .getComputedStyle(box, null)
      .getPropertyValue("display");
    if (display === "flex") {
      return { id: utils.getElementId(box, config), dom: box };
    }

    box = box.parentElement!.closest(`${config.selectors}`);
  }

  return null;
}

const FlexCheckTargets = new Set(["Row", "Column", "Element"]);

export function getFlexInfo(
  target: HTMLElement,
  config: TSelectorConfig
): TSelectedChangeEventArgs["flexInfo"] {
  if (!FlexCheckTargets.has(utils.getElementType(target, config)!)) {
    return {
      isFlex: false,
      direction: null,
    };
  }

  const cpStyle = window.getComputedStyle(target, null);
  const isFlex = cpStyle.getPropertyValue("display") === "flex";

  let direction = null;
  if (isFlex) {
    direction = cpStyle.getPropertyValue("flex-direction");
  }

  return {
    isFlex,
    direction,
  };
}

function queryTarget(id: number, config: TSelectorConfig) {
  const selector = `.${config.idPrefix}-${id}`;
  return document.querySelector(selector)!;
}

export function hookPageMouseEvent(
  hoverElement: ComputedRef<HTMLElement | null>
) {
  useEventListener(
    document.querySelector("body"),
    "click",
    (e) => {
      // if (getExecutingFlag()) {
      //   return;
      // }

      const target = e.target as HTMLElement;

      // click layout tool
      if (target.closest("[layout-tool-panel]")) {
        return;
      }

      // click color picker
      // if (isColorPicker(target)) {
      //   return;
      // }

      if (hoverElement.value === null) {
        return;
      }

      targetElementContext.updateTargetElement(hoverElement.value);

      e.stopPropagation();
    },
    { capture: true }
  );
}

export function getComponentExpose(
  config: TSelectorConfig,
  selectedElement: Ref<HTMLElement | null>
) {
  function sendMessage(message: {
    selectTarget?: { id: number };
    serverResetCommand?: { propertyName: string };
    trackRecord?: { hasChanged: boolean };
    testing?: { isTesting?: boolean; content?: string };
  }) {
    if (message.selectTarget) {
      onSelectTarget(message.selectTarget.id);
    }

    if (message.serverResetCommand) {
      onServerResetCommand(message.serverResetCommand.propertyName);
    }

    if (message.trackRecord) {
      onTrackRecord(message.trackRecord);
    }

    if (message.testing) {
      onTesting(message.testing);
    }
  }

  function queryStyle(id: number, styleName: string) {
    return window
      .getComputedStyle(queryTarget(id, config), null)
      .getPropertyValue(styleName);
  }

  function onSelectTarget(id: number) {
    const target = queryTarget(id, config) as HTMLElement;
    selectedElement.value = target;
  }

  function onServerResetCommand(propertyName: string) {
    // globals.triggerPropertyUpdate(propertyName);
    targetElementContext.triggerUpdateFlag(propertyName);
  }

  function onTrackRecord(info: { hasChanged: boolean }) {
    recordTracker.setHasChanged(info.hasChanged);
  }

  function onTesting(info: { isTesting?: boolean; content?: string }) {
    if (info.isTesting !== undefined) {
      testingContent.isTesting.value = info.isTesting;
    }

    if (info.content !== undefined) {
      testingContent.content.value = info.content;
    }
  }

  function tailwindSearch(id: number, classes: string[]) {
    server.handleServerResponse(id, classes);
  }

  return { queryStyle, sendMessage, tailwindSearch };
}

export async function createClientStyleLinkTag(resource_path?: string) {
  if (!resource_path) {
    return;
  }

  const niceguiResourcesJs = "../../static/utils/resources.js";

  // @ts-ignore
  const { loadResource } = await import(niceguiResourcesJs);
  const path_prefix = (window as any).path_prefix;
  await loadResource(path_prefix + `${resource_path}/trackBall.css`);
}
