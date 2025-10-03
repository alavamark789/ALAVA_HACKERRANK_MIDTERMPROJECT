function designerPdfViewer(h, word) {
     let maxHeight = 0;

    for (let i = 0; i < word.length; i++) {
        
        let index = word.charCodeAt(i) - 97;
        let height = h[index];

        if (height > maxHeight) {
            maxHeight = height;
        }
    }

    return maxHeight * word.length;
}

