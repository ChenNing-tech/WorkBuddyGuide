import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import HomePage from "./HomePage.vue";

describe("AI Learning Hub home", () => {
  it("exposes the platform entry points", () => {
    const wrapper = mount(HomePage);

    expect(wrapper.get("h1").text()).toBe("从使用AI，到创造自己的AI工具");
    expect(wrapper.get('a[href="/bluebook/"]').text()).toContain("从WorkBuddy开始");
    expect(wrapper.find('a[href="/teacher-assistant/#download"]').exists()).toBe(true);
    expect(wrapper.find('a[href="/skills/"]').exists()).toBe(true);
    expect(wrapper.find('a[href="/prompts/"]').exists()).toBe(true);
    expect(wrapper.find('a[href="/cases/"]').exists()).toBe(true);
    expect(wrapper.find(".wb-traffic").exists()).toBe(false);
  });
});
