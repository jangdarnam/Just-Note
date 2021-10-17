import React from "react";
import styled from "styled-components";

const Background = styled.div`
    height: 5rem;
`;

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const getListElements = (idx: number) => {
    const isOverFlow = (arrIdx: number) =>
        idx + arrIdx < list.length ? idx + arrIdx : idx + arrIdx - list.length;
    return [list[idx], list[isOverFlow(1)], list[isOverFlow(2)]];
};

let idx = 0;

const Reel = () => {
    const [display, setDisplay] = React.useState<number[]>(getListElements(0));

    const onScroll = (e: any) => {
        const isDown = e.deltaY > 0;
        if (isDown) {
            idx = idx + 1 >= list.length ? 0 : idx + 1;
        } else {
            idx = idx - 1 <= 0 ? list.length - 1 : idx - 1;
        }
        setDisplay(getListElements(idx));
    };

    return (
        <Background onWheel={e => onScroll(e)}>
            {display.map(x => {
                return <div>{x}</div>;
            })}
        </Background>
    );
};

export default Reel;
