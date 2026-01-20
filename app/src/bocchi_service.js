const fetch_data = async (parameter) => {
    const response = await fetch(`http://localhost:3000/bocchi/${parameter}`);
    const json = await response.json();
    return json.data;
}

exports.fetch_data = fetch_data;