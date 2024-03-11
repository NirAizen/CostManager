async function removeFieldsFromUsersCollection() {
    try {
        const pipeline = [
            {
                $unset: ["_id", "__v"]
            }
        ];