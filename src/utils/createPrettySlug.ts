export const createPrettySlug = (name: string, joinBy = "-") => {
    return name.split(" ").join(joinBy).toLowerCase();
};
