export const getDurationAndIndexFromScrollOffset = (variables: {
    disableInfiniteScroll: boolean;
    intervalItems: number;
    itemHeight: number;
    numberOfItems: number;
    padWithNItems: number;
    yContentOffset: number;
}) => {
    const {
        disableInfiniteScroll,
        intervalItems,
        itemHeight,
        numberOfItems,
        padWithNItems,
        yContentOffset,
    } = variables;

    const index = Math.round(yContentOffset / itemHeight);
    const numberOfItemsWithIntervals = Math.ceil(numberOfItems / intervalItems);
    const duration =
        (disableInfiniteScroll ? index : index + padWithNItems) % numberOfItemsWithIntervals;

    return {
        duration,
        index,
    };
};
