import Mock from "mockjs";
import custom from "./custom";

Mock.mock(/\/mock\/custom/,'get',custom);
