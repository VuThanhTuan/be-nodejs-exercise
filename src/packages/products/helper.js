const getUpdateImageData = (oldImagesList, newImagesList, indexNewImageList, indexDeleteImageList) => {
  const updateImageData = indexNewImageList.map((each, index) => {
    return {
      index: each,
      url: newImagesList[index],
    }
  })

  console.log(updateImageData)

  if (!oldImagesList.length) {
    return [...updateImageData]
  }

  const filterUnChangeImage = oldImagesList.filter((each) => {
    return !indexNewImageList.includes(each.index) && !indexDeleteImageList.includes(each.index)
  })

  console.log(filterUnChangeImage)

  return [...filterUnChangeImage, ...updateImageData]

}

export default {
  getUpdateImageData
}