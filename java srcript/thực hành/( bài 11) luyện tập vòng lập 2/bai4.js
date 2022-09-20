<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        int main()
{
        int n, m;
    printf("Nhap chieu rong: ");
    scanf("%d", &n);
    printf("Nhap chieu dai: ");
    scanf("%d", &m);
     
    int i, j;
    for(i = 0; i<n; i++){
        for(j = 0; j<m; j++){
            if(i == 0 || i == n-1 || j == 0 || j == m-1){
                printf("* ");
            }else{
                printf("  ");
            }
        }
        printf("\n");
    }
}
    </script>
</body>
</html>