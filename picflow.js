class PicFlow {
    constructor(picArea, width = 100) {
        picArea.style.setProperty('--pic-flow-width', width + "px");
        this._picWidth = width;
        this.inJectWith(this)
        this.picRows = new Array(Math.floor(picArea.clientWidth / width));
        this.picRows.fill(0);
        this.picArea = picArea;
        this.picQueue = [];
    }
    addPic(picurl) {
        if (picurl instanceof Array) {
            this.picQueue.concat(picurl);
            picurl.forEach((item) => {
                this.wark(item);
            })
        } else {
            this.picQueue.push(picurl);
            this.wark(picurl);
        }
    }
    wark(picurl) {
        const img = new Image();
        img.src = picurl;
        img.className = "pic-flow-pic";
        img.addEventListener("load", (() => {
            const rowIndex = minIndex(this.picRows);
            this.picArea.appendChild(img);
            img.style.setProperty("--pic-flow-translate-x", rowIndex * this.picWidth + "px");
            img.style.setProperty("--pic-flow-translate-y", this.picRows[rowIndex] + "px");
            this.picRows[rowIndex] += img.height;
        }).bind(this))
    }
    inJectWith(obj) {
        Object.defineProperty(obj, "picWidth", {
            get: function () {
                return obj._picWidth;
            },
            set: function (v) {
                obj._picWidth = v
                picArea.style.setProperty('--pic-flow-width', v + "px");
                return true
            }
        })
    }
}

const minIndex = (array) => {
    let indexOfMinimum = 0;
    let Min = array[0];
    array.forEach((item, index) => {
        if (item < Min) {
            Min = array[index];
            indexOfMinimum = index;
        }
    })
    return indexOfMinimum
}