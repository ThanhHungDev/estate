function findImageEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(character => {
        const entityKey = character.getEntity();
        return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === "IMAGE"
        );
    }, callback);
}

const Image = props => {
    const { height, src, width } = props.contentState
    .getEntity(props.entityKey)
    .getData();
    return <img src={src} height={height} width={width} />;
};

const getEntitiesData = (editorState, entityType = null) => {
    const entities = getEntities(editorState, entityType)
    return entities.map(item => item.entity.getData())
}
const getEntities = (editorState, entityType = null) => {
    const content = editorState.getCurrentContent();
    const entities = [];
    content.getBlocksAsArray().forEach((block) => {
        let selectedEntity = null;
        block.findEntityRanges(
            (character) => {
                if (character.getEntity() !== null) {
                    const entity = content.getEntity(character.getEntity());
                    if (!entityType || (entityType && entity.getType() === entityType)) {
                        selectedEntity = {
                            entityKey: character.getEntity(),
                            blockKey: block.getKey(),
                            entity: content.getEntity(character.getEntity()),
                        };
                        return true;
                    }
                }
                return false;
            },
            (start, end) => {
                entities.push({...selectedEntity, start, end});
            });
    });
    return entities;
};

export default {
    findImageEntities,
    Image,
    getEntities,
    getEntitiesData,
}