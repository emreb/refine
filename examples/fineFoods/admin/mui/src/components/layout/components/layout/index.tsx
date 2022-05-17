import { useState } from "react";
import { LayoutProps } from "@pankod/refine-core";
import { CssBaseline } from "@pankod/refine-mui";

import { LayoutContext } from "../../context";
import { Header } from "../header";
import { Sider } from "../sider";
import { Content } from "../content";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [opened, setOpened] = useState(false);

    return (
        <LayoutContext.Provider
            value={{
                collapsed,
                setCollapsed,
                opened,
                setOpened,
            }}
        >
            <CssBaseline />
            <Header />
            {opened && <Sider />}
            <Content>{children}</Content>
        </LayoutContext.Provider>
    );
};