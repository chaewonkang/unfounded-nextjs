import React from "react";
import { css } from "@emotion/react";
import Link from "next/link";

const invitationBox = css`
    width: 100vw;
    height: 80vh;
`;

const InvitationBox = ({ bgColor }) => {
    return <div css={invitationBox} style={{ backgroundColor: bgColor }}></div>;
};
export default InvitationBox;
