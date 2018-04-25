$(document).ready(function(){
        

    //Ao apertar o botão lê o input-text e insere o valor na div
    $("#btn-insere").on("click", function(){
        //Não permite que o botão faça o evento padrão
        //No caso seria mandar um form
        event.preventDefault();
        //Pega o valor do input-text
        var nomeInsere = $("#nome-tarefa").val();    
        var tituloTarefa = $("#titulo-tarefa").val();
        
        //Se nao for nulo, insere
        if(nomeInsere !=="" || tituloTarefa !==""){
            //cria um elemento <div> com estilo boostrap e no atributo texto dele,
            //insere o valor lido        
            var elem = $("<div class='col-sm-2'></div>").text(nomeInsere);        
            $("#col-1").append(elem);

            $(".main").append(
                "<div> <legend class='linha-titulo'>"+tituloTarefa+"</legend> <div id="+tituloTarefa+" class='linha'> <div class='linha-elemento'>"+nomeInsere+"</div> </div> </div>"
            );                
            
            //Adiciona o nome da tarefa na dropdownlist                        
            $('.myTasks').append('<option value ='+tituloTarefa+'>'+tituloTarefa+'</option>');                       
                                            
        //Limpa os campos de texto        
        $("#nome-tarefa").val('');
        $("#titulo-tarefa").val('');
        
        }else{
            alert('Campos vazios');
        }                                        
    });
    
    //Ao apertaro botão de nova atividade
    $("#btn-insere-atividade").on("click",function(){
        //Não permite que o botão faça o evento padrão
        //No caso seria mandar um form
        event.preventDefault();
        //procura o elemento pelo Id e dá um append na div
        //pega o valor dos campos            
        var tarefaAtual = $("#myTasksToinsert option:selected").text();    
        var nomeAtividade = $("#inserir-nome-atividade").val();
        //Limpa o campo text
        $("#inserir-nome-atividade").val('');
        //Append no elemento pelo ID digitado na criação do elemento
        //$("#"+tarefaAtual).append("<p class=linha-tarefa>"+nomeAtividade + " <span> <button class=btn-concluir-linha-tarefa> Concluído </button> <button id=btn"+nomeAtividade+"class=btn-excluir-linha-tarefa> Excluir </button> </span> </p> ");
        

        var elem = $("<p class=linha-tarefa></p>").text(nomeAtividade);
        elem.append("<button class=btn-excluir-linha-tarefa> X </button>");
        $("#"+tarefaAtual).append(elem);


        $(".btn-excluir-linha-tarefa").on("click",function(){
            $(this).parent().slideUp(400);            
        });



    });

    
    $("#btn-deleta-atividade").on("click",function(){
        //Desabilita evento padrão
        event.preventDefault();
        //Refencia o item no selectlist...
        var tarefaAtual = $("#TasksToDelete option:selected").text();
        //Usa o item para excluir a tarefa da página        
        $('#'+tarefaAtual ).parent().slideUp(500);
        //E excluir o item da lista   
        $('.myTasks option[value='+tarefaAtual+']').remove();
    });
      

});//End document Ready