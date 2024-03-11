async function removeFieldsFromUsersCollection() {
    try {
        const pipeline = [
            {
                $unset: ["_id", "__v"]
            }
        ];

        const db = client.db('<your-database-name>');
        const result = await db.collection('users').aggregate(pipeline).toArray();

        console.log('Documents updated:', result.length);
    } catch (error) {
        console.error('Error removing fields from users collection', error);
    }
}