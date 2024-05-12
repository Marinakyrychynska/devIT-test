function getBase64FromUrl(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {

        if (!response.ok) {
          throw new Error('Error');
        }

        return response.buffer();
      })
      .then(buffer => {
        const base64 = Buffer.from(buffer).toString('base64');4
        resolve(`data:image/png;base64,${base64}`);
      })
      .catch(error => {
        reject(error);
      });
  });
}