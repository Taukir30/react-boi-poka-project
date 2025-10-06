const getReadList = () => {                                     //function for getting read list from local memory

    const readListSTR = localStorage.getItem('readList');
    
    if(readListSTR){
        const readList = JSON.parse(readListSTR);
        return readList;
    }else{
        return [];
    }
}

const setReadList = (id) => {                                   //function for setting read list to local memory

    const currentReadList = getReadList();

    if(currentReadList.includes(id)){
        alert("Already Marked as read!!!");
    }else{
        currentReadList.push(id);

        const newReadList = JSON.stringify(currentReadList);

        localStorage.setItem('readList', newReadList);
    }
}

const getWishList = () => {                                      //function for getting wish list from local memory
    const wishListSTR = localStorage.getItem('wishList');
    
    if(wishListSTR){
        const wishList = JSON.parse(wishListSTR);
        return wishList;
    }else{
        return [];
    }
}

const setWishList = (id) => {                                   //function for setting wish list to local memory

    const currentWishList = getWishList();

    if(currentWishList.includes(id)){
        alert("Already Added to Wish List!!!");
    }else{
        currentWishList.push(id);

        const newWishList = JSON.stringify(currentWishList);

        localStorage.setItem('wishList', newWishList);
    }
}

const deleteFromWishList = (id) => {

    const currentWishList = getWishList();

    const updatedWishList = currentWishList.filter( wishId => wishId !== id )

    const newWishList = JSON.stringify(updatedWishList);

    localStorage.setItem('wishList', newWishList);
}

export {getReadList, setReadList, getWishList, setWishList, deleteFromWishList};