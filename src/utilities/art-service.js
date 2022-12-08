export async function postArt(formData) {
    const res = await fetch('/api/art', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    console.log("test" + res)
    //above line is nessisary because it calls res
}

export async function deleteArt(id) {
    const res = await fetch('/api/art/' + id, {
        method: 'DELETE'
    });
    console.log("delete Test" + res)
    console.log('/api/art/' + id)
}

export async function updateArt(formData) {
    const res = await fetch('/api/art', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    console.log("test" + res)
    //above line is nessisary because it calls res
}