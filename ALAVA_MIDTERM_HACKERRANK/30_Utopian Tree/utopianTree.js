function utopianTree(n) {
     let height = 1;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
          
            height = height * 2;
        } else {
            
            height = height + 1;
        }
    }

    return height;
}
