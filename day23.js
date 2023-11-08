        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
        const q = [root]
        
        while (q.length) {
            const n = q.shift()
            process.stdout.write(n.data + ' ')
            
            if (n.left) q.push(n.left)
            if (n.right) q.push(n.right)
        }