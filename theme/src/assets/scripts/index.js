import '../styles/index.scss';

import './masonry';
import './charts';
import './popover';
import './scrollbar';
import './search';
import './sidebar';
import './skycons';
import './vectorMaps';
import './chat';
import './datatable';
import './datepicker';
import './email';
import './fullcalendar';
import './googleMaps';
import './utils';

import swal from 'sweetalert2'

/**
 * This shouldn't be here. We should move this to a own module.
 * However for the demo it should do
 */

const $ = require('jquery');
const loginForm = $('#login-form');

if (loginForm.length) {
    const radios = loginForm.find('input[type="radio"][name="loginTarget"]');
    const adjustTarget = function() {
        loginForm.attr('action', radios.filter(':checked').data('target'));
    }

    radios.on('change', adjustTarget);
    adjustTarget();
}

const contractCreationButton = $('#contractCreationTrigger');
if (contractCreationButton.length) {
    let trackingData = [
        {
            id: 0,
            ts: 123,
            data: ['foo', 'bar', 'baz']
        },
        {
            id: 1,
            ts: 456,
            data: ['1', '2', '3']
        },
        {
            id: 2,
            ts: 789,
            data: ['some', 'data']
        }
    ];

    String.prototype.hashCode = function() {
        var hash = 0, i, chr;
        if (this.length === 0) return '0x'+hash;
        for (i = 0; i < this.length; i++) {
            chr   = this.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return '0x'+hash;
    };
    const getHash = function(dataPoint) {
        return (dataPoint.id + '-' + dataPoint.ts + '-' + dataPoint.data.join(',')).hashCode();
    }

    if (typeof web3 === 'undefined') {
        swal('Error!', 'web3 is required! Please install the MetaMask extension.', 'error');
    } else {
        let contractAddress = '';
        const contractAbi = [{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getLastIndex","outputs":[{"name":"i","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDataPoints","outputs":[{"components":[{"name":"id","type":"uint256"},{"name":"ts","type":"uint256"},{"name":"dataHash","type":"string"}],"name":"d","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getShipmentId","outputs":[{"name":"s","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"ts","type":"uint256"},{"name":"dataHash","type":"string"}],"name":"addDataPoint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"getHashByIndex","outputs":[{"name":"h","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"id","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
        const contractCode = '60606040526000600255341561001457600080fd5b6040516108823803806108828339810160405280805190910190506000818051610042929160200190610064565b505060018054600160a060020a03191633600160a060020a03161790556100ff565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a557805160ff19168380011785556100d2565b828001600101855582156100d2579182015b828111156100d25782518255916020019190600101906100b7565b506100de9291506100e2565b5090565b6100fc91905b808211156100de57600081556001016100e8565b90565b6107748061010e6000396000f3006060604052600436106100775763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633ccfd60b811461007c5780633e1a93001461009157806366888624146100b65780639e116d1814610117578063df09fa7a146101a1578063ec058186146101fd575b600080fd5b341561008757600080fd5b61008f610213565b005b341561009c57600080fd5b6100a46102a7565b60405190815260200160405180910390f35b34156100c157600080fd5b6100c96102ad565b604051602080825281908101838181518152602001915080516000925b8184101561010657602080850284010151815260200192600101926100e6565b925050509250505060405180910390f35b341561012257600080fd5b61012a6103c5565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561016657808201518382015260200161014e565b50505050905090810190601f1680156101935780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101ac57600080fd5b61008f600480359060248035919060649060443590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061046d95505050505050565b341561020857600080fd5b61012a600435610510565b6001543373ffffffffffffffffffffffffffffffffffffffff90811691161461023b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff3016311161025f57600080fd5b60015473ffffffffffffffffffffffffffffffffffffffff9081169030163180156108fc0290604051600060405180830381858888f1935050505015156102a557600080fd5b565b60025490565b6102b56105f3565b600380548060200260200160405190810160405281815291906000602084015b828210156103bc576000848152602090206003830201606060405190810160405290816000820154815260200160018201548152602001600282018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103a45780601f10610379576101008083540402835291602001916103a4565b820191906000526020600020905b81548152906001019060200180831161038757829003601f168201915b505050505081525050815260200190600101906102d5565b50505050905090565b6103cd6105f3565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104635780601f1061043857610100808354040283529160200191610463565b820191906000526020600020905b81548152906001019060200180831161044657829003601f168201915b5050505050905090565b6001543373ffffffffffffffffffffffffffffffffffffffff90811691161461049557600080fd5b60038054600181016104a78382610605565b916000526020600020906003020160006060604051908101604090815287825260208201879052810185905291905081518155602082015181600101556040820151816002019080516104fe929160200190610636565b50506002805460010190555050505050565b6105186105f3565b600082101561052657600080fd5b600254821061053457600080fd5b600380548390811061054257fe5b90600052602060002090600302016002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105e75780601f106105bc576101008083540402835291602001916105e7565b820191906000526020600020905b8154815290600101906020018083116105ca57829003601f168201915b50505050509050919050565b60206040519081016040526000815290565b8154818355818115116106315760030281600302836000526020600020918201910161063191906106b4565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061067757805160ff19168380011785556106a4565b828001600101855582156106a4579182015b828111156106a4578251825591602001919060010190610689565b506106b09291506106e7565b5090565b6106e491905b808211156106b0576000808255600182018190556106db6002830182610701565b506003016106ba565b90565b6106e491905b808211156106b057600081556001016106ed565b50805460018160011615610100020316600290046000825580601f106107275750610745565b601f01602090049060005260206000209081019061074591906106e7565b505600a165627a7a72305820a5f9d9830fcd20d73d2c2a673d40e5d2d1e97365ebce5419255afe9a15ca99290029';

        // instead of having a ABI and bitecode, we could read the contract of the FS (or have an input field with it)
        // then we could live compile it (https://gist.github.com/tomconte/4edb83cf505f1e7faf172b9252fff9bf)
        // we could even use Monaco (the editor, that powers Visual Studio Code), as WYSIWYG Editor
        // https://github.com/Microsoft/monaco-editor and use a solidity plugin (demo: https://microsoft.github.io/monaco-editor/)
        // then we could have our own remix.etherum.org and not rely on them... just saying...

        window.web3 = new window.Web3(window.web3.currentProvider);

        const adminCanvas = $('#admin-canvas-wrapper');
        const modal = $('#contractCreation');
        const field = modal.find('#contractIdField');
        contractCreationButton.on('click', function(e) {
            e.preventDefault();
            if (field.val() && field.val().match(/.*[a-zA-Z0-9]+.*/g)) {
                const contractId = field.val();
                modal.modal('hide');
                $('#contactCreationModalTrigger').remove();

                const localWeb = window.web3;
                let contract = localWeb.eth.contract(contractAbi);
                contract.new('"'+contractId+'"', {
                    from: web3.eth.accounts[0], 
                    data: contractCode, 
                    gas: '750000'
                  }, function(e, contract) {
                    if (typeof contract === 'object') {
                        if (typeof contract.transactionHash === 'undefined') {
                            swal('Ooops...', 'Error no transaction hash!', 'error');
                        } else {
                            if (typeof contract.address !== 'undefined') {swal({
                                title: 'Submit email to run ajax request',
                                input: 'email',
                                showCancelButton: true,
                                confirmButtonText: 'Submit',
                                showLoaderOnConfirm: true,
                                preConfirm: (email) => {
                                  return new Promise((resolve) => {
                                    setTimeout(() => {
                                      if (email === 'taken@example.com') {
                                        swal.showValidationError(
                                          'This email is already taken.'
                                        )
                                      }
                                      resolve()
                                    }, 2000)
                                  })
                                },
                                allowOutsideClick: () => !swal.isLoading()
                              }).then((result) => {
                                if (result.value) {
                                  swal({
                                    type: 'success',
                                    title: 'Ajax request finished!',
                                    html: 'Submitted email: ' + result.value
                                  })
                                }
                              })
                                contractAddress = contract.address;
                                swal('Smart Contract created', 'Successfully created a smart contract at: '+contract.address, 'success');
                                adminCanvas.html('<br /><br /><br /><div class="alert alert-dark" role="alert">Address: '+contractAddress+'</div><table class="table table-striped"><tr><th>ID</th><th>ts</th><th>data</th><th>hash</th></table><br /><br /><ul id="txList"></ul><br /><br /><br /><div class="text-center"><button class="btn btn-danger" id="fake-me-button">Fake it...</button> <button class="btn btn-success btn-fill" id="verify-now-button">Hashs verifizieren</button></div>');
                                let table = adminCanvas.find('table');
                                let txList = adminCanvas.find('#txList');
                                $.each(trackingData, function() {
                                    table.append('<tr data-id="'+this.id+'"><td>'+this.id+'</td><td>'+this.ts+'</td><td>'+this.data.join(', ')+'</td><td data-hash="'+getHash(this)+'">'+getHash(this)+'</td></tr>');
                                    let curId = this.id;
                                    contract.addDataPoint(this.id, this.ts, getHash(this), function(e, txHash) {
                                        txList.append('<li><b>'+curId+':</b> '+txHash);
                                    });
                                });

                                //window.j = $;

                                $('#verify-now-button').on('click', function(e) {
                                    e.preventDefault();
                                    console.log('verify button');

                                    const rows = table.find('tr').length - 1; // remove head tr
                                    let hashes = [];
                                    let counter = 0;
                                    for (let i=0;i<rows;i++) {
                                        contract.getHashByIndex(i, function(e, hash) {
                                            console.log('got hash from blockchain: ' + hash)
                                            if (table.find('td[data-hash="'+hash+'"]').length != 1 || table.find('td[data-hash="'+hash+'"]').data('hash') != hash) {
                                                table.find('td[data-hash="'+hash+'"]').html(hash + ' <span class="text-danger">[Error]</span>');
                                                swal('Error!', 'Hash missmatch!', 'error');
                                            } else {
                                                table.find('td[data-hash="'+hash+'"]').html(hash + ' <span class="text-success">[OK]</span>');
                                                counter++;
                                            }

                                            if (counter == rows) {
                                                swal('All good!', 'Hash off all rows are verified, data integrity looking good!', 'success');
                                            }
                                            hashes.push(hash);
                                        });
                                    }

                                    $('#fake-me-button').on('click', function(e) {
                                        swal({
                                            title: 'Are we the bad guys?',
                                            input: 'text',
                                            showCancelButton: true,
                                            confirmButtonText: 'Fake it!',
                                            preConfirm: (fakeData) => {
                                                
                                              table.find('tr[data-id="1"] td[data-hash]').attr('data-hash', fakeData).data('hash', fakeData).html(fakeData);
                                              table.find('tr[data-id="1"]').addClass('warning');
                                            }
                                        });
                                    });

                                    return false;
                                })
                            } else {
                                swal('Tranaction started', 'Transaction started, txHash: ' + contract.transactionHash, 'success');
                            }
                        }
                    }
                });
            } else {
                swal('Error!', 'Shipment ID can\'t be empty', 'error');
            }

            return false;
        });
    }
}