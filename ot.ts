// `apply(apply(S, A), B') = apply(apply(S, B), A')`.
// 上面这个公式就是OT的核心，S为文档初始状态，产生操作A',B',
// 保证执行结果一致。
// 整体执行流程有点像合并排序的过程。两个下标指针分别往前走
TextOperation.transform = function (operation1, operation2) {
  // operation1， operation2就是操作A，B
  let operation1prime = new TextOperation(); // 操作转换后得到的A'
  let operation2prime = new TextOperation(); // 操作转换后得到的B'
  let ops1 = operation1.ops;
  let ops2 = operation2.ops;
  let i1 = 0;
  let i2 = 0;
  let op1 = ops1[i1++];
  let op2 = ops2[i2++];
  while (true) {
    // 保证两者的下标一致，这样操作的才是同一个位置的数据
    // 如果A是插入操作，A'一定也是插入，但是B'就不一样了，
    // 因为A是插入，不管你B是啥，都得先 retain一下，保证下标一致
    // 这里实际上有三种情况，A是插入，B可能是R，I，D
    if (isInsert(op1)) {
      operation1prime.insert(op1);
      operation2prime.retain(op1.length);
      op1 = ops1[i1++];
      continue;
    }
    // 如果B也是插入，那B'就是插入，但是你的A'也得retain，保证下标一致
    // 这里可能有两者情况，A可能是R，D
    if (isInsert(op2)) {
      operation1prime.retain(op2.length);
      operation2prime.insert(op2);
      op2 = ops2[i2++];
      continue;
    }
    // ...
  }
  return [operation1prime, operation2prime];
};
