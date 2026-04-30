resource "aws_eks_cluster" "runbook_runtime" {
  name     = "runbook-runtime-cluster"
  role_arn = aws_iam_role.eks_role.arn

  vpc_config {
    subnet_ids = var.private_subnets
  }
}

resource "aws_eks_node_group" "standard_nodes" {
  cluster_name    = aws_eks_cluster.runbook_runtime.name
  node_group_name = "runbook-nodes"
  node_role_arn   = aws_iam_role.node_role.arn
  subnets         = var.private_subnets

  scaling_config {
    desired_size = 3
    max_size     = 10
    min_size     = 3
  }
}
