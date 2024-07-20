import { makeInstaller } from "@asuka-element/utils";
import "@asuka-element/theme/index.css";
import components from "./components";
const installer = makeInstaller(components);
import { AsButton } from "@asuka-element/components";
export default installer;

export { AsButton };
