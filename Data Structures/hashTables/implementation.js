class HashTable {
  constructor(limit) {
    this.size = 0;
    this.limit = limit || 4;
    this.storage = [];
  }

  set(key, val) {
    const index = this.hashKey(key);
    let isUpdate = false;
    let bucket = this.storage[index];
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }

    bucket.forEach((tuple) => {
      if (tuple[0] === key) {
        tuple[0] = val;
        isUpdate = true;
      }
    });

    if (!isUpdate) {
      this.size++;
      bucket.push([key, val]);
      if (this.size > this.limit * 0.75) this.resize(this.limit * 2);
    }
  }

  resize(newSize) {
    this.limit = newSize;
    this.storage.forEach((bucket) => {
      bucket.forEach((tuple) => {
        this.set(tuple[0], tuple[1]);
      });
    });
  }

  remove(key) {
    const index = this.hashKey(key);
    const bucket = this.storage[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        if (this.size < this.limit * 0.25) this.resize(Math.ceil(this.limit / 2));
      }
    }
  }

  get(key) {
    const index = this.hashKey(key);
    const bucket = this.storage[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return 'Item not found in table';
  }

  hashKey(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 4) + key[i].charCodeAt(0);
      hash %= this.limit;
    }
    return hash;
  }

  print() {
    console.log(this.storage);
  }
}
