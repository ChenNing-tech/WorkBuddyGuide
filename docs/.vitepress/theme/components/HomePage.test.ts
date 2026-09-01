import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import HomePage from "./HomePage.vue";

describe("HomePage training experience", () => {
  it("leads teachers into the training path", () => {
    const wrapper = mount(HomePage);

    expect(wrapper.get("h1").text()).toBe("教师AI实践课");
    expect(wrapper.get('a[href="/training/"]').text()).toContain("进入培训专区");
    expect(wrapper.find('a[href="/training/01-before-class"]').exists()).toBe(true);
    expect(wrapper.find('a[href="/training/04-teaching-cases"]').exists()).toBe(true);
    expect(wrapper.find(".wb-traffic").exists()).toBe(false);
  });
});
