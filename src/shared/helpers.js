export const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
});

export const authCondition = (authUser) => !!authUser;