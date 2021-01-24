export const Views = {
  all: {
    map: function (doc) {
      if (doc.type && doc.type === 'ISSUE') {
        emit(doc._id, doc.title)
      }
    }
  }
}
