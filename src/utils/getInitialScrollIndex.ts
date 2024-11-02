export const getInitialScrollIndex = (variables: {
    disableInfiniteScroll: boolean;
    intervalItems: number;
    numberOfItems: number;
    padWithNItems: number;
    repeatNumbersNTimes: number;
    value: number;
}) => {
    const {
        disableInfiniteScroll,
        intervalItems,
        numberOfItems,
        padWithNItems,
        repeatNumbersNTimes,
        value,
    } = variables;
    const numberOfItemsWithIntervals = Math.ceil(numberOfItems / intervalItems);
    return Math.max(
        numberOfItemsWithIntervals * Math.floor(repeatNumbersNTimes / 2) +
            ((value + numberOfItemsWithIntervals) % numberOfItemsWithIntervals) -
            (!disableInfiniteScroll ? padWithNItems : 0),
        0
    );
};
