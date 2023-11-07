export const createPrettySlug = (name = "", joinBy = "-") => {
    return name.split(" ").join(joinBy).toLowerCase();
};
