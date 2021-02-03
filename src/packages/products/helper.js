const getUpdateImageData = (oldImagesList, newImagesList, indexNewImageList, indexDeleteImageList) => {
  // Array object Image update
  const updateImageData = indexNewImageList.map((each, index) => {
    return {
      index: each,
      url: newImagesList[index],
    }
  })
  // check list current image in database
  if (!oldImagesList.length) {
    // if have object => push into Array object Image update
    return [...updateImageData]
  }
  // filter object image that unchange
  const filterUnChangeImage = oldImagesList.filter((each) => {
    return !indexNewImageList.includes(each.index) && !indexDeleteImageList.includes(each.index)
  })

  return [...filterUnChangeImage, ...updateImageData]
}

export default {
  getUpdateImageData
}