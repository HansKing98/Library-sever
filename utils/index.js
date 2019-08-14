
function FindOpenid() {
    return User.find({ _id: '5d5364f9ef1ec2088e722fe5' },function(err, data) {
        if (err) throw err;
    })
  }