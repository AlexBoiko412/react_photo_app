export const getTotalPagesNumber = (totalElements, limit) => {
    return Math.ceil(totalElements/limit)
}